export class League {
    boats: Object

    constructor(){
        this.boats = {
            "batel": this.generateCategories(),
            "llaut_med": this.generateCategories(),
            "llagut_cat": this.generateCategories(),
        }
    }

    public addCategoryResult(boat: string, category: [string, string], result: Object){
        if (!this.boats[boat][category[0]][category[1]]) {
            this.boats[boat][category[0]][category[1]] = [];
        }
        this.boats[boat][category[0]][category[1]].push(result);
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
