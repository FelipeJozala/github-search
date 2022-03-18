import React from 'react';
import useGithub from '../../hooks/useGithub';
import {
  DataContainer, Img, ImgContainer, ProfileContainer, ProfileNameRow, ProfileRow, ProfileStatus,
  UserLogin, UserName,
} from './styles';

function Profile() {
  const { githubState } = useGithub();
  const { user } = githubState;
  return (
    <ProfileContainer>
      <ImgContainer>
        <Img src={user.avatar} alt="Github Avatar" />
      </ImgContainer>
      <DataContainer>
        <ProfileNameRow>

          <UserName>{user.name}</UserName>

          <UserLogin><a href={user.html_url} target="_blank" rel="noopener noreferrer">{user.login}</a></UserLogin>
        </ProfileNameRow>
        <ProfileRow>
          <h3>Company: </h3>
          <span>
            {user.company}
          </span>
        </ProfileRow>
        <ProfileRow>
          <h3>Location: </h3>
          <span>
            {user.location}
          </span>
        </ProfileRow>
        <ProfileRow>
          <h3>Blog: </h3>
          <span>
            {user.blog}
          </span>
        </ProfileRow>
        <ProfileRow>
          <ProfileStatus>
            <h3>Followers</h3>
            <span>
              {user.followers}
            </span>
          </ProfileStatus>
          <ProfileStatus>
            <h3>Following</h3>
            <span>
              {user.following}
            </span>
          </ProfileStatus>
          <ProfileStatus>
            <h3>Gits</h3>
            <span>
              {user.public_gists}
            </span>
          </ProfileStatus>
          <ProfileStatus>
            <h3>Repos</h3>
            <span>
              {user.public_repos}
            </span>
          </ProfileStatus>
        </ProfileRow>
      </DataContainer>
    </ProfileContainer>
  );
}

export default Profile;
