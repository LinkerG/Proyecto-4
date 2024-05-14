import { db, Competition, eq } from "astro:db";
import { generateUUID } from "../helpers/generateUUID";
import { getYearFromDate } from "../helpers/getYearFromDate";

export async function add(formData: FormData){
    const uuid = generateUUID();
    const name = formData.get('name');
    const date = new Date(formData.get('date').toString()); // Formato a Date
    const year: string = getYearFromDate(date);
    const location = formData.get('location');
    const boat_type = formData.get('boat_type');
    const lines = formData.get('lines');
    const line_distance = formData.get('line_distance');

    if(typeof uuid === 'string' && typeof name === 'string' && typeof location === 'string') {
        console.log(formData);
        await db.insert(Competition).values({
        // @ts-ignore // Esto funciona pero por alguna razón el IDE marca error pero inserta bien y no hay problemas
            id: uuid,
            name: name,
            year: year,
            date: date, 
            location: location,
            image: "",
            boat_type: boat_type,
            lines: lines,
            line_distance: line_distance,
            isCancelled: false,
            isActive: true
        });
        return true;
    }
}

export async function update(formData: FormData, uuid){
    const name = formData.get('name');
    //const date = new Date(formData.get('date').toString()); // Formato a Date
    //const year: string = getYearFromDate(date);
    const location = formData.get('location').toString();
    const boat_type = formData.get('boat_type').toString();
    const lines = parseInt(formData.get('lines').toString());
    const line_distance = parseInt(formData.get('line_distance').toString());

    console.log(formData);
    await db.update(Competition).set({
    // @ts-ignore // Esto funciona pero por alguna razón el IDE marca error pero inserta bien y no hay problemas
        name: name,
        //year: year,
        //date: date, 
        location: location,
        image: "",
        boat_type: boat_type,
        lines: lines,
        line_distance: line_distance,
        isCancelled: false,
        isActive: true
    })
    .where(eq(Competition.id, uuid));
    return true;
    
}