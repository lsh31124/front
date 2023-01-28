import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import JobItem from './JobItem'
import { TextField } from '@material-ui/core'
import SearchIcon from '@mui/icons-material/Search'
import IconButton from '@mui/material/IconButton'
import CircularProgress from '@mui/material/CircularProgress'
import { dummyData } from './DummyList'

export default function JobList(): React.ReactElement {
  const data = dummyData

  const [inputVal, setInputVal] = React.useState('')
  const searchList = (): void => {
    console.log(inputVal)
  }
  const [loading, setLoading] = React.useState(true)
  React.useEffect(() => {
    setLoading(false)
  }, [])
  
  return (
    <TableContainer sx={{ width: '100%', marginLeft: '2rem', marginTop: '2rem' }}>
      <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>채용공고 검색</h3>
      <TextField
        fullWidth
        placeholder="검색어를 입력하세요."
        id="search"
        onChange={(e): void => setInputVal(e.target.value)}
        // sx={{ margin: '2rem 0 1rem 1rem' }}
        style={{ margin: '2rem 0 1rem 1rem' }}
        InputProps={{
          endAdornment: (
            <IconButton onClick={searchList}>
              <SearchIcon style={{ fontSize: '35px' }} />
              {/* <SearchIcon sx={{ fontSize: 35 }} edge="end" /> */}
            </IconButton>
          ),
        }}
      />
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell colSpan={6} sx={{ fontSize: '1.5rem', fontWeight: 'bold', height: '4rem' }}>
              기업공고
            </TableCell>
          </TableRow>
          <TableRow sx={{ backgroundColor: '#1976d221' }}>
            <TableCell align="left">기업명</TableCell>
            <TableCell align="left">공고기간</TableCell>
            <TableCell align="center" colSpan={4}>
              공고제목
            </TableCell>
          </TableRow>
        </TableHead>
        {loading ? (
          <TableBody>
            <TableRow>
              <TableCell colSpan={6} sx={{ textAlign: 'center' }}>
                <CircularProgress size={'10rem'} />
              </TableCell>
            </TableRow>
          </TableBody>
        ) : (
          <TableBody>
            {data.map((item, index) => (
              <JobItem key={index} propsItem={item} />
            ))}
          </TableBody>
        )}
      </Table>
    </TableContainer>
  )
}


