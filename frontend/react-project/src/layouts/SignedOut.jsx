import Button from 'react-bootstrap/Button';

function SignedOut(props) {

  return (
    
    <>
      <Button onClick={props.signIn}>Giriş yap</Button>
       <Button type="submit" style={{marginLeft:"0.5em"}} href="/productadd">Kayıt ol</Button>{' '}
    </>
  );
  
}

export default SignedOut;