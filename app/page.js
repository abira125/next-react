import LikeButton from "./like-button";

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
            <LikeButton></LikeButton>
        </div>
    )
}