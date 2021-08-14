// This file was generated by RedwoodJS
import '@redwoodjs/router'
import { A } from 'ts-toolbelt'



type RouteParams<Route> = Route extends `${string}/${infer Rest}`
  ? A.Compute<ParsedParams<Rest>>
  : {}

type QueryParams = Record<string | number, string | number | boolean>

declare module '@redwoodjs/router' {
  interface AvailableRoutes {
    // Only "<Route />" components with a "name" and "path" prop will be populated here.
    newUser: (params?: RouteParams<"/users/new"> & QueryParams) => "/users/new"
    editUser: (params?: RouteParams<"/users/{id:Int}/edit"> & QueryParams) => "/users/{id:Int}/edit"
    user: (params?: RouteParams<"/users/{id:Int}"> & QueryParams) => "/users/{id:Int}"
    users: (params?: RouteParams<"/users"> & QueryParams) => "/users"
    about: (params?: RouteParams<"/about"> & QueryParams) => "/about"
    home: (params?: RouteParams<"/"> & QueryParams) => "/"
    login: (params?: RouteParams<"/login"> & QueryParams) => "/login"
  }
}

type ParamType<constraint> = constraint extends 'Int'
  ? number
  : constraint extends 'Boolean'
  ? boolean
  : constraint extends 'Float'
  ? number
  : string

// Path string parser for Redwood Routes
type ParsedParams<PartialRoute> =
  // {a:Int}/[...moar]
  PartialRoute extends `{${infer Param}:${infer Constraint}}/${infer Rest}`
    ? // check for greedy match e.g. {b}/{c:Int}
      // Param = b}/{c, Rest2 = {c, Constrait = Int so we reconstruct the old one {c + : + Int + }
      Param extends `${infer Param2}}/${infer Rest2}`
      ? { [ParamName in Param2]: string } &
          ParsedParams<`${Rest2}:${Constraint}}`> &
          ParsedParams<`${Rest}`>
      : { [Entry in Param]: ParamType<Constraint> } & ParsedParams<`${Rest}`>
    : // has type, but at the end e.g.{d:Int}
    PartialRoute extends `{${infer Param}:${infer Constraint}}`
    ? // Greedy match order 2
      Param extends `${infer Param2}}/${infer Rest2}`
      ? { [ParamName in Param2]: string } &
          ParsedParams<`${Rest2}:${Constraint}}`>
      : { [Entry in Param]: ParamType<Constraint> }
    : // no type, but has stuff ater it {c}/{d}
    PartialRoute extends `{${infer Param}}/${infer Rest}`
    ? { [ParamName in Param]: string } & ParsedParams<`${Rest}`>
    : // last one with no type e.g. {d}
    PartialRoute extends `{${infer Param}}`
    ? { [ParamName in Param]: string }
    : // if theres a non param
    PartialRoute extends `${string}/${infer Rest}`
    ? ParsedParams<`${Rest}`>
    : {}
