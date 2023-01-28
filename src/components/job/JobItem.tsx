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
import { JobItemType } from './DummyList'

interface JobItemProps {
  propsItem: JobItemType
}

export default function JobItem({ propsItem }: JobItemProps): React.ReactElement {
  const { conm, regymd, ddlnymd, sj, qlfcrqrmnt, eplymtform, rcrtmtnoppl, wagecdn, addr, dutycn } = propsItem

  const [open, setOpen] = React.useState(false)
  const [like, setLike] = React.useState(false)
  const handleLike = (): void => setLike(!like)
  const handleToggle = (): void => setOpen(!open)

  return (
    <>
      <TableRow>
        <TableCell align="left">{conm}</TableCell>
        <TableCell align="left">
          <span>{regymd + ' ~ '}</span>
          <br />
          <span>{ddlnymd}</span>
        </TableCell>
        <TableCell align="left" colSpan={3}>
          {sj}
        </TableCell>
        <TableCell align="right">
          <IconButton aria-label="expand row" size="small" onClick={handleToggle}>
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
                <IconButton aria-label="delete" onClick={handleLike} color={like ? 'primary' : 'inherit'}>
                  <StarIcon sx={{ fontSize: 35 }} />
                </IconButton>
              </Box>
              <Table size="small" aria-label="purchases">
                <TableBody>
                  <TableRow>
                    <TableCell sx={{ width: '20%', borderRight: '1px solid rgba(224, 224, 224, 1)' }}>
                      자격요건
                    </TableCell>
                    <TableCell scope="row">{qlfcrqrmnt}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ width: '20%', borderRight: '1px solid rgba(224, 224, 224, 1)' }}>
                      고용형태
                    </TableCell>
                    <TableCell scope="row">{eplymtform}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ width: '20%', borderRight: '1px solid rgba(224, 224, 224, 1)' }}>
                      모집인원
                    </TableCell>
                    <TableCell scope="row">{rcrtmtnoppl}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ width: '20%', borderRight: '1px solid rgba(224, 224, 224, 1)' }}>
                      임금조건
                    </TableCell>
                    <TableCell scope="row">{wagecdn}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ width: '20%', borderRight: '1px solid rgba(224, 224, 224, 1)' }}>근무지</TableCell>
                    <TableCell scope="row">{addr}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ width: '20%', borderRight: '1px solid rgba(224, 224, 224, 1)' }}>
                      직무내용
                    </TableCell>
                    <TableCell scope="row">{dutycn}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
}
