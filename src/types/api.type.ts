export type GenericResponse<T> = T extends Response ? T : Response & T;
