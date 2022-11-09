
export interface Usuario {
  userName : string,
  email : string,
  firstName : string ,
  lastName : string,
  gender : string,
  token : string

}

export interface UsuarioId extends Usuario{
  id : number;
}
