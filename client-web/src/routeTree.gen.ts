/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AuthenticatedImport } from './routes/_authenticated'
import { Route as IndexImport } from './routes/index'
import { Route as SignUpIndexImport } from './routes/sign-up/index'
import { Route as SignInIndexImport } from './routes/sign-in/index'
import { Route as AuthenticatedIntroductionMaterialImport } from './routes/_authenticated/introduction/material'
import { Route as AuthenticatedIntroductionExerciseImport } from './routes/_authenticated/introduction/exercise'

// Create/Update Routes

const AuthenticatedRoute = AuthenticatedImport.update({
  id: '/_authenticated',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const SignUpIndexRoute = SignUpIndexImport.update({
  id: '/sign-up/',
  path: '/sign-up/',
  getParentRoute: () => rootRoute,
} as any)

const SignInIndexRoute = SignInIndexImport.update({
  id: '/sign-in/',
  path: '/sign-in/',
  getParentRoute: () => rootRoute,
} as any)

const AuthenticatedIntroductionMaterialRoute =
  AuthenticatedIntroductionMaterialImport.update({
    id: '/introduction/material',
    path: '/introduction/material',
    getParentRoute: () => AuthenticatedRoute,
  } as any)

const AuthenticatedIntroductionExerciseRoute =
  AuthenticatedIntroductionExerciseImport.update({
    id: '/introduction/exercise',
    path: '/introduction/exercise',
    getParentRoute: () => AuthenticatedRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_authenticated': {
      id: '/_authenticated'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthenticatedImport
      parentRoute: typeof rootRoute
    }
    '/sign-in/': {
      id: '/sign-in/'
      path: '/sign-in'
      fullPath: '/sign-in'
      preLoaderRoute: typeof SignInIndexImport
      parentRoute: typeof rootRoute
    }
    '/sign-up/': {
      id: '/sign-up/'
      path: '/sign-up'
      fullPath: '/sign-up'
      preLoaderRoute: typeof SignUpIndexImport
      parentRoute: typeof rootRoute
    }
    '/_authenticated/introduction/exercise': {
      id: '/_authenticated/introduction/exercise'
      path: '/introduction/exercise'
      fullPath: '/introduction/exercise'
      preLoaderRoute: typeof AuthenticatedIntroductionExerciseImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/introduction/material': {
      id: '/_authenticated/introduction/material'
      path: '/introduction/material'
      fullPath: '/introduction/material'
      preLoaderRoute: typeof AuthenticatedIntroductionMaterialImport
      parentRoute: typeof AuthenticatedImport
    }
  }
}

// Create and export the route tree

interface AuthenticatedRouteChildren {
  AuthenticatedIntroductionExerciseRoute: typeof AuthenticatedIntroductionExerciseRoute
  AuthenticatedIntroductionMaterialRoute: typeof AuthenticatedIntroductionMaterialRoute
}

const AuthenticatedRouteChildren: AuthenticatedRouteChildren = {
  AuthenticatedIntroductionExerciseRoute:
    AuthenticatedIntroductionExerciseRoute,
  AuthenticatedIntroductionMaterialRoute:
    AuthenticatedIntroductionMaterialRoute,
}

const AuthenticatedRouteWithChildren = AuthenticatedRoute._addFileChildren(
  AuthenticatedRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '': typeof AuthenticatedRouteWithChildren
  '/sign-in': typeof SignInIndexRoute
  '/sign-up': typeof SignUpIndexRoute
  '/introduction/exercise': typeof AuthenticatedIntroductionExerciseRoute
  '/introduction/material': typeof AuthenticatedIntroductionMaterialRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '': typeof AuthenticatedRouteWithChildren
  '/sign-in': typeof SignInIndexRoute
  '/sign-up': typeof SignUpIndexRoute
  '/introduction/exercise': typeof AuthenticatedIntroductionExerciseRoute
  '/introduction/material': typeof AuthenticatedIntroductionMaterialRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/_authenticated': typeof AuthenticatedRouteWithChildren
  '/sign-in/': typeof SignInIndexRoute
  '/sign-up/': typeof SignUpIndexRoute
  '/_authenticated/introduction/exercise': typeof AuthenticatedIntroductionExerciseRoute
  '/_authenticated/introduction/material': typeof AuthenticatedIntroductionMaterialRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | ''
    | '/sign-in'
    | '/sign-up'
    | '/introduction/exercise'
    | '/introduction/material'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | ''
    | '/sign-in'
    | '/sign-up'
    | '/introduction/exercise'
    | '/introduction/material'
  id:
    | '__root__'
    | '/'
    | '/_authenticated'
    | '/sign-in/'
    | '/sign-up/'
    | '/_authenticated/introduction/exercise'
    | '/_authenticated/introduction/material'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AuthenticatedRoute: typeof AuthenticatedRouteWithChildren
  SignInIndexRoute: typeof SignInIndexRoute
  SignUpIndexRoute: typeof SignUpIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AuthenticatedRoute: AuthenticatedRouteWithChildren,
  SignInIndexRoute: SignInIndexRoute,
  SignUpIndexRoute: SignUpIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_authenticated",
        "/sign-in/",
        "/sign-up/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_authenticated": {
      "filePath": "_authenticated.tsx",
      "children": [
        "/_authenticated/introduction/exercise",
        "/_authenticated/introduction/material"
      ]
    },
    "/sign-in/": {
      "filePath": "sign-in/index.tsx"
    },
    "/sign-up/": {
      "filePath": "sign-up/index.tsx"
    },
    "/_authenticated/introduction/exercise": {
      "filePath": "_authenticated/introduction/exercise.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/introduction/material": {
      "filePath": "_authenticated/introduction/material.tsx",
      "parent": "/_authenticated"
    }
  }
}
ROUTE_MANIFEST_END */
