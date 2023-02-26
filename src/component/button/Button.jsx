const variant = {
    primary: {
        backgroundColor: '#2196f3',
        color: '#fff'
    },
    success: {
        backgroundColor: '#4caf50',
        color: '#000'
    },
    error: {
        backgroundColor: '#f44336',
        color: '#fff'
    },
    warning: {
        backgroundColor: '#ff9800',
        color: '#000'
    },
    info: {
        backgroundColor:'#80d8ff',
        color: '#000'
    }
}


const Button = (props) => {
    const userVariant = variant[props.variant]
    return <button type = {props.type} 
    style = {{
        padding: '1rem 2rem', 
        fontSize: '0.9rem',
        textTransform: 'uppercase',
        letterspacing: '1px',
        fontWeight: '700',
        border: 'none',
        marginRight: '1rem',
        cursor: 'pointer',

        ...userVariant
        
        }}
        
        >
        {props.text} 
    
    
    
    
    </button>
}

export default Button;