// Component
import BankItem from "../BankItem";
// Data
import banks from "../data/banks";


// parent component
const Banks = () => {
    function acceptDataFromChild(k){
        console.log(k)
    }
    return (
        <section>
            <h1>List of Banks</h1>
            <BankItem src="yjtjytjyfj" className="class" id="dd" alt="ternate" fn={acceptDataFromChild}/>
            {/* <BankItem src="fj" className="cldsazass" id="dfdsd" alt="dfsdf" /> */}
            {/* <BankItem src="tjytjyfj" className="clhtrass" id="ddfsd" alt="ternfdsdfate" /> */}
            {/* <BankItem src="jytjyfj" className="clhbrtass" id="ddfsd" alt="terndsfsdate" /> */}
            {/* <BankItem src="yjyfj" className="classvrt" id="ddsfd" alt="terdsfsdnate" /> */}
            {
                banks
                    .map( item => <BankItem url={item.logo} className={item.name} id={item.code} alt={item.slug} />)
            }
            
            <img src="" className="" id="" alt="" />
        </section>
    )
}

export default Banks;