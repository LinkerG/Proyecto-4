export class League {
    boats: Object

    constructor(){
        this.boats = {
            "batel": this.generateCategories(),
            "llaut_med": this.generateCategories(),
            "llagut_cat": this.generateCategories(),
        }
    }

    public setCategoryResult(boat: string, category: [string, string]){
        //console.log(this.boats[boat][category[0]][category[1]])
    }

    private generateCategories(){
        let categories = {
            A: { M:{}, F:{} },
            I: { M:{}, F:{} },
            C: { M:{}, F:{} },
            J: { M:{}, F:{} },
            S: { M:{}, F:{} },
            V: { M:{}, F:{} },
        }

        return categories
    }
}