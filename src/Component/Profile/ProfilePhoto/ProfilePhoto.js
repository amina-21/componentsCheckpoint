import React from 'react'
import { Container } from 'react-bootstrap'
import myProfilePic from '../../../profile_pic.jpg'
import '../../Profile/ProfilePhoto/ProfilePhoto.css'
function ProfilePhoto() {
    return (
        <div>
            <Container>
                <img className="photo mt-5" src={myProfilePic} alt="my-pic" />
            </Container>
        </div>
    )
}

export default ProfilePhoto
