import PropTypes from 'prop-types';


const newMessage = {
    message: "Hole",
    title: "Hum"
};

const getResult = (a, b) => {
    return a + b;
}

export const Tarea = ({title, subTitle}) => {


    
    return (
        <>
            <h1>{title}</h1>
            <h2>{ getResult(1,2) }</h2>
            {/* <code> { JSON.stringify(newMessage) } </code> */}
            <p>{subTitle}</p>
        </>
       
    );
  }

  Tarea.PropTypes = {
    titulo: PropTypes.string
  }
  