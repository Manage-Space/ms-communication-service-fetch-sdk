/* tslint:disable */
/* eslint-disable */
/**
 * ManageSpace Communication API
 * ManageSpace Communication API Documentation
 *
 * The version of the OpenAPI document: 0.0.11-dev
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface BadRequestError400ResponseError
 */
export interface BadRequestError400ResponseError {
    /**
     * 
     * @type {string}
     * @memberof BadRequestError400ResponseError
     */
    readonly message: string;
    /**
     * 
     * @type {string}
     * @memberof BadRequestError400ResponseError
     */
    readonly code: string;
}

/**
 * Check if a given object implements the BadRequestError400ResponseError interface.
 */
export function instanceOfBadRequestError400ResponseError(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "message" in value;
    isInstance = isInstance && "code" in value;

    return isInstance;
}

export function BadRequestError400ResponseErrorFromJSON(json: any): BadRequestError400ResponseError {
    return BadRequestError400ResponseErrorFromJSONTyped(json, false);
}

export function BadRequestError400ResponseErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): BadRequestError400ResponseError {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'message': json['message'],
        'code': json['code'],
    };
}

export function BadRequestError400ResponseErrorToJSON(value?: BadRequestError400ResponseError | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
    };
}

