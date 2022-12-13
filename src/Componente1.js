import React from 'react'

const Componente1 = () => {
    return (
        <section>
            <Saluto />
            <Saluto />
            <Saluto />
        </section>
        );
};

const Persona = () => {
    return <h3>Mi chiamo Luca</h3>;
};
const Messaggio = () => <h4>Ciao Sono Luca</h4>

const Saluto = () => {
    return (
        <React.Fragment>
            <Persona/>
            <Messaggio></Messaggio>
        </React.Fragment>
    )
}

export default Componente1