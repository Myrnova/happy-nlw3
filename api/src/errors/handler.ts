import { ErrorRequestHandler } from 'express';
import { ValidationError } from 'yup';

interface ValidationErrors{
    [key: string]: string[];
    // "nome": ["asdadsa", "ssss"]
// o nome do campo é uma string e os valores dos erros sao um array de strings
}


const errorHandler: ErrorRequestHandler = (error, request, response, next) => {
    if (error instanceof ValidationError){
        let errors: ValidationErrors = {};

        error.inner.forEach(err => {
            errors[err.path] = err.errors;
        });

        return response.status(400).json({ message: 'Validation fails', errors})
    } 
    
    
    console.error(error);

    return response.status(500).json({ message: 'Internal server error'});

}

export default errorHandler;