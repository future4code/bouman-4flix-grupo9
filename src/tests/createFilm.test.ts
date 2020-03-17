import { v4 } from "uuid"
import moment from "moment"

test('criando o filme com seus dados', () => {
    //preparação
    const mockInput = {
        title: "Bastardos Inglórios",
        premiere_date:  moment("09/08/2019", "DD/MM/YYYY"),
        length: "9180",
        synopsis: "Durante a Segunda Guerra Mundial, na França, um grupo de judeus americanos conhecidos como Bastardos espalha o terror entre o terceiro Reich. Ao mesmo tempo, Shosanna, uma judia que fugiu dos nazistas, planeja vingança quando um evento em seu cinema reunirá os líderes do partido.",
        link: "www.linkfalso.com",
        picture: "www.linkfalso.com"
    }

})