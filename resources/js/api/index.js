export * from './link'
export * from './bet'

export const StatusCode = {
  BadRequest: 400,
  Unauthorized: 401,
  NotFound: 404,
  ValidationError: 422,
  TooManyRequests: 429,
  InternalServerError: 500,
}

export function getApiErrorFromResponse (response) {
  if (response && [StatusCode.BadRequest, StatusCode.Unauthorized, StatusCode.NotFound, StatusCode.ValidationError, StatusCode.InternalServerError].includes(response.status) && (response.data.error || response.data.message)) {
    return response.data.error || response.data.message
  } else if (response && [StatusCode.ValidationError, StatusCode.TooManyRequests].includes(response.status) && response.data.errors) {
    return response.data.errors.join(', ')
  } else if (response.message) {
    return response.message
  } else if (response) {
    return 'Request failed try again later'
  } else {
    return 'Request failed due to unknown error.'
  }
}
