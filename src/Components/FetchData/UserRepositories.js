import React from 'react';
import Fetch from './Fetch';
import RepoMemo from './RepoMemo';

const UserRepositories = ( {
	login,
	selectedRepo,
	onSelect = f => f
} ) => {

	return(
		<Fetch 
			uri = {`https://api.github.com/users/${login}/repos`}
			renderSuccess { ( {data} ) => (
				<RepoMemo 
					repositories={data} 
					onSelect={onSelect}
					selectedRepo={selectedRepo}
				/>
			)}
		/>			
	);
};

export default UserRepositories;


