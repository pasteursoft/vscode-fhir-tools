declare module 'fhirpath' {
    export function evaluate(
        resource: any,
        path: string,
        context: any
    ): (resource: any) => any;
}