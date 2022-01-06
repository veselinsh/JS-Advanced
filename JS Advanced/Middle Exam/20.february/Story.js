class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }
    get likes() {
        if (this._likes.length === 0) {
            return `${this.title} has 0 likes`;
        }
        let username = this._likes[0];
        if (this._likes.length === 1) {
            return `${username} likes this story!`;
        }
        return `${username} and ${this._likes.length - 1} others like this story!`;

    }
    like(username) {
      if(this._likes.includes(username)){
          throw new Error('You can\'t like the same story twice!');
      }
      if(username == this.creator){
          throw new Error('You can\'t like your own story!');
      } 
      this._likes.push(username);
      return `${username} liked ${this.title}!`;
    }
    dislike (username){
        if(this._likes.includes(username) === false){
          throw new Error('You can\'t dislike this story!');
        }
        this._likes = this._likes.filter(u => u !== username)
        return `${username} disliked ${this.title}`;
    }
    comment (username, content, id){
        if(!this._comments.some(c=>c.Id == id) || id === undefined){
            let newComment = {Id:this._comments.length+1,
            Username:username,
            Content:content,
            Replies:[],
            }
            this._comments.push(newComment);
            return `${username} commented on ${this.title}`;
        }else{
            const reply = 1;

        }
       let commentToReply = this._comments.find(f=> f.Id === id);
       let replyNextId = commentToReply.Replies.length + 1;
       let replyId = Number(`${commentToReply.Id}.${replyNextId}`)
       let reply = {
        Id: replyId,
        Username: username,
        Content: content,
       }
       commentToReply.Replies.push(reply);
       return `You replied successfully`;
    }
    toString(sortingType){
        if(sortingType === 'asc'){
           this._comments.sort((a,b)=> a.Id - b.Id);
        }else if(sortingType  === 'desc'){
            this._comments.sort((a,b)=> b.Id - a.Id);
        }else if(sortingType === 'username'){
            this._comments.sort((a,b)=> a.Username.localeCompare(b.Username));
        }
        let commentStringArr = [];
        for(const comment of this._comments){
            let commentString = `-- ${comment.Id}. ${comment.Username}: ${comment.Content}`;
            let repliesString = comment.Replies.map(r=> `--- ${r.Id}. ${r.Username}: ${r.Content}`).join('\n');
            let combinedString  = `${commentString}\n${repliesString}`;
            repliesString = comment.Replies.length > 0 ? `\n${repliesString}` : '';
            commentStringArr.push(combinedString);
        }
        let fullCommentString = commentStringArr.join('\n');
        return `Title: ${this.title}
        Creator: ${this.creator}
        Likes: ${this._likes.length}
        Comments: 
${fullCommentString}`; 
       
        
        
     
    }
}
let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));
