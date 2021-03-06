"use strict"
const joi = require('joi');
const ClassController = require('../controller/ClassController.js');
const HealthController = require('../controller/HealthController.js');
const FailureHandlerController = require('../controller/FailureHandlerController.js');
const ClassValidator = require('../validator/ClassValidator.js');
const HTTPMethod = require('../config/HTTPMethod.js')

module.exports = [
    {
        method: HTTPMethod.GET,
        path: "/",
        options: {
            // auth: "simple",
            description: "Index endpoint to test if application is up and running",
            notes: "Returns a hello world",
            tags: ["api", "Health"],
            handler: HealthController.getHealthController
        }
    },
    {
        method: HTTPMethod.GET,
        path: "/classes/{id}",
        options: {
            // auth: "simple",
            description: "Returns a class with given ID",
            notes: "Returns class information with given ID",
            tags: ["api", "Class"],
            validate: {
                params: ClassValidator.idParameterValidator,
                failAction: FailureHandlerController.failureHandler
            },
            handler: ClassController.getClassWithIdController
        }
    },
    {
        method: HTTPMethod.DELETE,
        path: "/classes/{id}",
        options: {
            // auth: "simple",
            description: "Deletes a class with given ID",
            notes: "Deletes a class information with given ID",
            tags: ["api", "Class"],
            validate: {
                params: ClassValidator.idParameterValidator,
                failAction: FailureHandlerController.failureHandler
            },
            handler: ClassController.deleteClassWithIdController
        }
    },
    {
        method: HTTPMethod.DELETE,
        path: "/classes",
        options: {
            // auth: "simple",
            description: "Deletes all classes",
            notes: "Deletes all classes from database",
            tags: ["api", "Class"],
            handler: ClassController.deleteAllClassesController
        }
    },
    {
        method: HTTPMethod.PUT,
        path: "/classes/{id}",
        options: {
            // auth: "simple",
            description: "Updates class info with given ID",
            notes: "Updates class info with given ID",
            tags: ["api", "Class"],
            validate: {
                params: ClassValidator.idParameterValidator,
                payload: ClassValidator.classUpdateScheme,
                failAction: FailureHandlerController.failureHandler
            },
            handler: ClassController.updateClassWithIdController
        }
    },
    {
        method: HTTPMethod.PATCH,
        path: "/classes/{id}",
        options: {
            // auth: "simple",
            description: "Updates class info with given ID",
            notes: "Updates class info with given ID",
            tags: ["api", "Class"],
            validate: {
                params: ClassValidator.idParameterValidator,
                payload: joi.object({
                    description: joi.string().optional(),
                    content: joi.string().optional(),
                    room: joi.string().optional(),
                    team: joi.string().optional(),
                    evaluation: joi.string().optional()
                }),
                failAction: FailureHandlerController.failureHandler
            },
            handler: ClassController.updateClassWithIdController
        }
    },
    {
        method: HTTPMethod.GET,
        path: "/classes",
        options: {
            // auth: "simple",
            description: "Returns all classes",
            notes: "Returns all registered classes",
            tags: ["api", "Class"],
            handler: ClassController.getAllClassesController
        }
    },
    {
        method: HTTPMethod.POST,
        path: "/classes",
        options: {
            // auth: "simple",
            description: "Register new class",
            notes: "Register a class",
            tags: ["api", "Class"],
            validate: {
                payload: ClassValidator.insertClassScheme,
                failAction: FailureHandlerController.failureHandler
            },
            handler: ClassController.insertController
        }
    },
    {
        method: HTTPMethod.GET,
        path: "/classes/{id}/content",
        options: {
            validate: {
                params: ClassValidator.idParameterValidator,
                failAction: FailureHandlerController.failureHandler
            },
            // auth: "simple",
            description: "Returns all contents from a class",
            notes: "Returns all contents for a class",
            tags: ["api", "Class", "Contents"],
            handler: ClassController.getContentsByClassId
        }
    },
    {
        method: HTTPMethod.GET,
        path: "/classes/evaluations/{id}",
        options: {
            validate: {
                params: ClassValidator.idParameterValidator,
                failAction: FailureHandlerController.failureHandler
            },
            // auth: "simple",
            description: "Returns all evaluations from a class",
            notes: "Returns all evaluations for a class",
            tags: ["api", "Class", "Evaluations"],
            handler: ClassController.getEvaluationsByClassId
        }
    },
    {
        method: HTTPMethod.GET,
        path: "/classes/{id}/rooms",
        options: {
            validate: {
                params: ClassValidator.idParameterValidator,
                failAction: FailureHandlerController.failureHandler
            },
            // auth: "simple",
            description: "Returns all rooms from a class",
            notes: "Returns all rooms for a class",
            tags: ["api", "Class", "Rooms"],
            handler: ClassController.getRoomsByClassId
        }
    },
    {
        method: HTTPMethod.GET,
        path: "/classes/evaluations",
        options: {
            validate: {
                failAction: FailureHandlerController.failureHandler
            },
            // auth: "simple",
            description: "Returns all evalutaions from external microservice",
            notes: "Returns all evalutaions from external microservice",
            tags: ["api", "Class", "Evaluations"],
            handler: ClassController.getAllEvaluations
        }
    },
    {
        method: HTTPMethod.GET,
        path: "/classes/rooms",
        options: {
            validate: {
                failAction: FailureHandlerController.failureHandler
            },
            // auth: "simple",
            description: "Returns all rooms from external microservice",
            notes: "Returns all rooms from external microservice",
            tags: ["api", "Class", "Rooms"],
            handler: ClassController.getAllRooms
        }
    },
    {
        method: HTTPMethod.GET,
        path: "/classes/{id}/teams",
        options: {
            validate: {
                params: ClassValidator.idParameterValidator,
                failAction: FailureHandlerController.failureHandler
            },
            // auth: "simple",
            description: "Returns all teams from a class",
            notes: "Returns all teams for a class",
            tags: ["api", "Class", "Teams"],
            handler: ClassController.getTeamsByClassId
        }
    },

];
