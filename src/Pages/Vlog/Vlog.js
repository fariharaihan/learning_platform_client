import React from 'react';

const Vlog = () => {
    return (
        <div>

            <div className='border m-4 p-3'>
                <h2>Question: 1</h2>
                <h3>What is cors?</h3>
                <h3>Answer:</h3>
                <p>
                    Cross-Origin Resource Sharing (CORS) is an HTTP-based security mechanism controlled and enforced by the client (web browser). It allows a service (API) to indicate any origin other than its own from which the client can request resources. CORS is implemented primarily in web browsers, but it can also be used in API clients as an option.
                </p>
            </div>
            <div className='border m-4 p-3'>
                <h2>Question: 2</h2>
                <h3>Why are you using firebase? What other options do you have to implement authentication?</h3>
                <h3>Answer:</h3>
                <p>
                    Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together.  Google Firebase offers many features that pitch it as the go-to backend development tool for web and mobile apps.
                </p>
                <p>
                    Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
                </p>
            </div>
            <div className='border m-4 p-3'>
                <h2>Question: 3</h2>
                <h3>How does the private route work?</h3>
                <h3>Answer:</h3>
                <p>
                    The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in)
                </p>
            </div>
            <div className='border m-4 p-3'>
                <h2>Question: 4</h2>
                <h3>What is Node? How does Node work? </h3>
                <h3>Answer:</h3>
                <p>
                    Node is a basic unit of a data structure, such as a linked list or tree data structure. Nodes contain data and also may link to other nodes. Links between nodes are often implemented by pointers.
                </p>
                <p>
                    Node is  used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                </p>
            </div>
        </div>
    );
};

export default Vlog;