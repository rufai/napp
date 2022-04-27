// child component

// the props is an object with key value pair   
const BankItem = (props) => {
    console.log(props)
    const {url,className, alt,id} = props
    // fn(9)
    return (
        <section>
            <h1>Bank Item</h1>
            <img src={url} />
            <p>{className}</p>
            <p>{alt}</p>
            <p>{id}</p>
        </section>
    )
}

export default BankItem;