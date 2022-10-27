import React from 'react';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from '../../context/AuthProvider/AuthProvider';


const LoginOption = () => {
    const { providerLogin, githubProviderLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider()

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.error(error))
    }

    const handleGitHubSignIn = () => {
        githubProviderLogin(gitHubProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <ButtonGroup vertical>

                <Button onClick={handleGoogleSignIn} className='my-2' variant="outline-info"><FaGoogle></FaGoogle> Log in with Google</Button>
                <Button onClick={handleGitHubSignIn} className='my-2' variant="outline-dark"><FaGithub></FaGithub> Log in with GitHub</Button>
            </ButtonGroup>


        </div>
    );
};

export default LoginOption;

