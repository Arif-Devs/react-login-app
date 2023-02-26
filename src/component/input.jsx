const InputGroup = (props) =>{
    
    const label = props.label
    const type = props.type
   
    return (
        
         <div 
        style={{
            display: 'flex', 
            flexDirection: 'column',
            marginBottom: '1rem'
            
            }}
            >
            <label style={{
                fontFamily: 'arial',
                fontSize: '1rem',
                color: '#424242',
            
            }} 
            
            htmlFor="name">{label}</label>
            
            <input type={type} id="name" 
            style={{
                padding: '0.5rem 1rem '
            }}

            />
           

            </div>
    )
}

export default InputGroup 