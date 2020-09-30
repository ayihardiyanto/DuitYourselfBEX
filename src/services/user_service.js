// import { getRepository as repo } from "typeorm";
// import Contract from '..'


// export default class ContractService{
//     contracRepo(){
//         return repo(Contract);
//     }
    
//     findAll(){
//         return this.contracRepo().find({relations:{
//             manager : 'manager',
//             tenant : 'tenant'
//         }});
//     }

//     findById(id){
//         return this.contracRepo().findOne(id);
//     }

//     addData(data){
//         return this.contracRepo().save(data);
//     }

//     renewData(data){
//         return this.contracRepo().save(data);
//     }

//     deleteData(data){
//         return this.contracRepo().delete(data);
//     }
// }
