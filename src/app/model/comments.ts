export class Comments{

    constructor(
        private postId: number,
        private id: number,
        public name: string,
        public email: string,
        public body: string,
    ){}
    
}