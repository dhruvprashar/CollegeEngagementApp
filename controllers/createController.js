const Post = require("../model/post");

exports.getInputForm = async (req, res) => {
   
    res.render("create-post.ejs");
}

exports.createPost = async (req, res) => {
    let {content, title} = req.body;

    let hashTags = content.split(" ").filter(st => st.startsWith("#"));
    console.log(hashTags);

    try {
        const post = await Post.create({
            title,
            content,
            type: "Blog",
            author: req.session.user.username,
            date: new Date(),
            upvote: 0,
            hashTags: hashTags,
            upvoteLists : []
        })
        const posts = await Post.find({});
        await req.flash('message',"*Post Created Successfully*");
        const message = await req.consumeFlash('message');
       
        //res.redirect("/blog");
        // res.locals.flash={
        //     'success': req.flash('message')
        // }
        res.render("posts.ejs", {posts: posts,message:message[0]});
    } catch (err) {
        console.log(err)
    }
}
