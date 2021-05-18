import React, { useState } from "react"
import { Form, Button, InputGroup, FormControl } from "react-bootstrap"

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("")

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push("/")
    }
  }

  return (
    <InputGroup onSubmit={submitHandler}>
      <FormControl
        placeholder="Search Products"
        onChange={(e) => setKeyword(e.target.value)}
        aria-label="Search Products"
      />
      <InputGroup.Append>
        <Button variant="primary" onClick={submitHandler}>
          <i className="fas-fa-search"></i>
        </Button>
      </InputGroup.Append>
    </InputGroup>
  )
}

export default SearchBox
