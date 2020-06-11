import { noop } from 'lodash'
import { createExample, CreateExampleEntity, ExampleEntity, fetchExample } from './api'

const apiTest = (description: string, fn: () => Promise<void>): void => {
  const testMethod = process.env.RUN_INTEGRATION_TESTS ? it : it.skip
  testMethod(description, () => fn().then(noop).catch(err => {
    const {message, response} = err
    if (message && response) {
      const body = response && Object.keys(response.body).length > 0 ? response.body : err.response.error.text
      throw new Error(`${response.status}: ${message}${'\n'}${JSON.stringify(body, null, 2)}`)
    }
    throw err
  }))
}

describe('api', () => {
  const testCreateExample: CreateExampleEntity = {
    name: `test name 💃 ${(new Date().getTime())} 💃`,
  }

  const testExampleEntity: ExampleEntity = {
    id: 7,
    name: `test entity name 🗿 ${(new Date().getTime())} 🗿`,
  }

  apiTest('createExample', () => createExample(testCreateExample).then(response => {
    expect(response.body).toMatchShapeOf(testExampleEntity)
  }))

  apiTest('fetchExample', () => fetchExample().then(response => {
    console.warn(response.body)
    expect(response.body).toMatchShapeOf([testExampleEntity])
  }))
})
