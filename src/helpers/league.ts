export class League {
    boats: Object

    constructor(){
        this.boats = {
            "batel": this.generateCategories(),
            "llaut_med": this.generateCategories(),
            "llagut_cat": this.generateCategories(),
        }
    }

    public addCategoryResult(boat: string, category: string[], teamId: string, points: number) {
        const [categoryType, categoryGender] = category;
        
        // Verificar si la categoría y el tipo de bote existen en el objeto
        if (!this.boats[boat][categoryType][categoryGender]) {
            this.boats[boat][categoryType][categoryGender] = [];
        }
    
        const teamIndex = this.boats[boat][categoryType][categoryGender]
            .findIndex(team => team.hasOwnProperty(teamId));
    
        if (teamIndex !== -1) {
            // Si el equipo ya existe, actualizar los puntos
            const currentPoints = this.boats[boat][categoryType][categoryGender][teamIndex][teamId];
            this.boats[boat][categoryType][categoryGender][teamIndex][teamId] = currentPoints + points;
        } else {
            // Si el equipo no existe, agregar un nuevo objeto al array
            this.boats[boat][categoryType][categoryGender].push({ [teamId]: points });
        }
    
        // Ordenar el array por puntos descendentes
        this.boats[boat][categoryType][categoryGender].sort((a, b) => {
            const pointsA: number = Number(Object.values(a)[0]); // Convertir a number explícitamente
            const pointsB: number = Number(Object.values(b)[0]); // Convertir a number explícitamente
            return pointsB - pointsA;
        });
    }    
    

    private generateCategories(){
        let categories = {
            A: { M:[], F:[] },
            I: { M:[], F:[] },
            C: { M:[], F:[] },
            J: { M:[], F:[] },
            S: { M:[], F:[] },
            V: { M:[], F:[] },
        }

        return categories
    }
}
