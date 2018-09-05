import React from 'react'

const NewsSources = (props) => {
  return(
    <select className="sources-dropdown">
      <option value='0'>All</option>
      {props.sources.map(source =>
        <option key={source.id} value={source.id}>{source.name}</option>
      )}
    </select>
  )
}

export default NewsSources;
