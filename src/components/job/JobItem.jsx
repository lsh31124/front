/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/camelcase */
import * as React from 'react'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import StarIcon from '@mui/icons-material/Star'

export default function JobItem({ row }) {
  const [open, setOpen] = React.useState(false)
  const [like, setLike] = React.useState(false)
  const handleLike = () => {
    setLike(!like)
  }
  return (
    <React.Fragment>
      <TableRow>
        <TableCell align="left">{row.co_nm}</TableCell>
        <TableCell align="left">
          <span>{row.reg_ymd + ' ~ '}</span>
          <br />
          <span>{row.ddln_ymd}</span>
        </TableCell>
        <TableCell align="left" colSpan={3}>
          {row.sj}
        </TableCell>
        <TableCell align="right">
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      {/* 아코디언하단 */}
      <TableRow sx={{ backgroundColor: '#1976d221' }}>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              {/* <Box sx={{ margin: '1rem 1rem 0 1rem' }}> */}
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h6" gutterBottom component="div">
                  상새내용
                </Typography>
                <IconButton aria-label="delete" onClick={handleLike} color={like ? 'primary' : 'silver'}>
                  <StarIcon sx={{ fontSize: 35 }} />
                </IconButton>
              </Box>
              <Table size="small" aria-label="purchases">
                {/* <TableHead></TableHead> */}
                <TableBody>
                  <TableRow>
                    <TableCell sx={{ width: '20%', borderRight: '1px solid rgba(224, 224, 224, 1)' }}>
                      자격요건
                    </TableCell>
                    <TableCell scope="row">{row.qlfc_rqrmnt}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ width: '20%', borderRight: '1px solid rgba(224, 224, 224, 1)' }}>
                      고용형태
                    </TableCell>
                    <TableCell scope="row">{row.eplymt_form}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ width: '20%', borderRight: '1px solid rgba(224, 224, 224, 1)' }}>
                      모집인원
                    </TableCell>
                    <TableCell scope="row">{row.rcrtmt_noppl}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ width: '20%', borderRight: '1px solid rgba(224, 224, 224, 1)' }}>
                      임금조건
                    </TableCell>
                    <TableCell scope="row">{row.wage_cdn}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ width: '20%', borderRight: '1px solid rgba(224, 224, 224, 1)' }}>근무지</TableCell>
                    <TableCell scope="row">{row.addr}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ width: '20%', borderRight: '1px solid rgba(224, 224, 224, 1)' }}>
                      직무내용
                    </TableCell>
                    <TableCell scope="row">{row.duty_cn}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  )
}

