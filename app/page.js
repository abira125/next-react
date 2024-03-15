import { useState } from 'react'

function Header({title}){
    console.log(title)
    return (
        <h1>
            {title ? title: 'Default title'}
        </h1>
    )
}

export default function HomePage(){
    const names = ['name1', 'name2'];
    const [likes, setLikes] = useState(0); 

    function handleClick(){
        console.log('Increment by 1');
        setLikes(likes+1);
    }

    return (
        <div>
            {/* Nesting the Header component */}
            <Header title='Header 1'/>
            <Header title='Header 2' />
            <Header />
            <ul>
                {
                    names.map(name => (<li key={name}> {name} </li>))
                }
            </ul>
            <button onClick={handleClick}>Like {likes}</button>
        </div>
    )
}