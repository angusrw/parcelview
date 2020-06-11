import { AbortableRequest, fetchJson, from, HttpVerb, withJsonBody } from 'abortable-networking'
import { SuperAgentRequest } from 'superagent'

const fromApi: (url: string, method?: HttpVerb) => SuperAgentRequest =
  from(process.env.API_LOCATION || '/api')

export type Id = number | string

export type CreateExampleEntity = {
  name: string,
}

export type ExampleEntity = {
  id: Id,
  name: string,
}

export type CreateParcelViewEntity = {
  name: string,
  email: string
}

export type CreateEmailEntity = {
  name: string,
  address: string
}

export type ParcelViewEntity = {
  id: Id,
  name: string,
  email: string
}

export type LoginEntity = {
  username: string,
  password: string
}

export const createExample = (example: CreateExampleEntity): AbortableRequest<ExampleEntity> =>
  fetchJson(withJsonBody(example)(fromApi('/example-entity', 'post')))

export const fetchExample = (): AbortableRequest<Array<ExampleEntity>> =>
  fetchJson(fromApi('/example-entity'))

export const listEntities = (): AbortableRequest<Array<ParcelViewEntity>> =>
  fetchJson(fromApi('/database'))

export const viewUncollected = (name: string): AbortableRequest<number> =>
  fetchJson(fromApi('/uncollected'))

export const deleteEntry = (entry: CreateParcelViewEntity) =>
  fetchJson(withJsonBody(entry)(fromApi('/deleteentry', 'post')))

export const sendMailApi = (entity: CreateEmailEntity) =>
  fetchJson(withJsonBody(entity)(fromApi('/send-mail', 'post')))

export const createParcelViewEntity = (entity: CreateParcelViewEntity): AbortableRequest<ParcelViewEntity> =>
  fetchJson(withJsonBody(entity)(fromApi('/database', 'post')))

export const createAccount = (entity: LoginEntity) =>
  fetchJson(withJsonBody(entity)(fromApi('/create_account', 'post')))

export const login = (entity: LoginEntity) =>
  fetchJson(withJsonBody(entity)(fromApi('/login', 'post')))

export const logout = () =>
  fetchJson(fromApi('/logout', 'post'))

export const checkLogin = (): AbortableRequest<boolean> =>
  fetchJson(fromApi('/check_login'))
