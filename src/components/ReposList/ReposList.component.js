import React from 'react'
import { Link } from 'react-router-dom'

const ReposList = (props) => (
    <ul>
        {props.repositories.map(repo => (
            <li key={repo.id}>
                <Link to={`/repo/${repo.name}`}>{repo.name}</Link>
            </li>
        ))}
    </ul>
)

export default ReposList