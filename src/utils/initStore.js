export default {
    currentUserId: "baldwin",
    users: [
        {
            id: "baldwin",
            email: "baldwin@bc.edu",
            photo: "/assets/user1.png",
            name: "Baldwin the Eagle",
            bio: "Flying high on being able to help out my fellow Eags🦅"
        },
        {
            id: "iggy",
            email: "iggy@bc.edu",
            photo: "/assets/user2.png",
            name: "St. Iggy",
            bio: "Trying my best to be a role model person for and with others🙏🏼"
        },
        {
            id: "adam",
            email: "delcasad@bc.edu",
            photo: "/assets/user3.png",
            name: "Adam Del Castillo",
            bio: "Lookign to help in anyway I can #AllInThisTogether"
        },
        {
            id: "tommy",
            email: "suhtommy@bc.edu",
            photo: "/assets/user4.png",
            name: "Tommy Suh"
        },
        {
            id: "esther",
            email: "leeesther@bc.edu",
            photo: "/assets/user5.png",
            name: "Esther Lee"
        }
    ],
    posts: [
        {
            id: "post-1",
            userId: "baldwin",
            userPhoto: "/assets/user1.png",
            type: "offer",
            title: "Storage for 5 Large Boxes",
            desc: "Hello! I live close by in Newton and I can store 5 large boxes over the summer! I can pick up from anywhere on lower campus until Friday!",
            tags: ["Storage", "Lower"],
            datetime: ""
        },
        {
            id: "post-2",
            userId: "iggy",
            userPhoto: "/assets/user2.png",
            type: "need",
            title: "Ride Share to Airport",
            desc: "Hey, I'm looking for other looking to uber to the airport on Saturday. My flight is in the after noon, so we looking to leave around 11. HMU!",
            tags: ["Transport", "Airport"],
            datetime: ""
        },
        {
            id: "post-3",
            userId: "baldwin",
            userPhoto: "/assets/user1.png",
            type: "need",
            title: "Large Boxes Needed",
            desc: "I'm wondering if anyone has any spare large sized boxes on lower campus that I could use. Need to pack up my dorm and don't have time to go out and buy them with finals. Thanks a bunch!",
            tags: ["Boxes", "Lower"],
            datetime: ""
        },
        {
            id: "post-4",
            userId: "adam",
            userPhoto: "/assets/user3.png",
            type: "offer",
            title: "Food and Support if you need it!",
            desc: "I've got a place off campus and am here for anyone that needs help. I'm a decent cook so I can whipe up a little something and am open to talk and provide support in this stressful time!",
            tags: ["Food", "Mental Helath Support", "Off-Campus"],
            datetime: ""
        },
        {
            id: "post-5",
            userId: "baldwin",
            userPhoto: "/assets/user1.png",
            type: "offer",
            title: "Meal Swipes at Lower",
            desc: "My meal plan still have $500 left on, and I'd hate for it to go to waste! Willing to swipe for anyone's dinner from Tuesday to Thursday if you give me a heads up as a response to this post! Don't be shy!",
            tags: ["Food", "Lower"],
            datetime: ""
        },
    ],
    likes:[
        {
            userId:"baldwin",
            postId:"post-1",
            datetime:""
        },
        {
            userId:"baldwin",
            postId:"post-2",
            datetime:"2020-02-09T22:51:40Z"
        },
        {
            userId:"iggy",
            postId:"post-2",
            datetime:"2020-02-09T22:54:20Z"
        },
        {
            userId:"adam",
            postId:"post-3",
            datetime:"2020-02-09T22:53:40Z"
        }
    ]
}