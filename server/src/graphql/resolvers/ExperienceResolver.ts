import { Experience } from './../../db/models/Experience';
import { Arg, Query, Resolver } from "type-graphql";

@Resolver()
export class ExperienceResolver {
    // query - experiences (input - employee_id)
    @Query(()=> [Experience])
    async experiences(@Arg("employeeId") employeeId: number): Promise<Experience[]>{
        return await 
    }
    // mutation - create experience (input - employee_id, start, end, type, description)
    // mutation - update experience (input - experience_id, {start, end, type, description})
    // mutation - delete experience (input - experience_id)
}
