import InputGroup from "./component/input";
import Button from "./component/button/Button";


function App() {
    return(
        <div
        style={{
            width:'60%',
            margin: '2rem auto',
            padding: '2rem',
            backgroundColor: '#efefef'
        }}
        >
            <div style={{
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'



            }}>
                <h1
                style={{
                    fontFamily: 'Arial',
                    fontSize: '2rem',
                    color: '#222',
                }}
                >
                sign up</h1>
                <p
                style={{
                    fontFamily: 'cursive',
                    fontSize: '1rem',
            
                }}
                >sign up here</p>
            </div>
           
                <form>
                
                <InputGroup label = 'what is name' type = 'text'/>
                <InputGroup label = 'what is your email' type = 'email' />
                <InputGroup label ='what is your password' type = 'password'/>
                
                
                <div>
                    <Button text = 'Reset' type="reset" variant='warning'/>
                    <Button text = 'submit' type="submit" variant="primary" />
                    <Button text='Cancel' type='button' variant='error' />
                </div>
                </form>
            </div>
      
    )
}
export default App;
