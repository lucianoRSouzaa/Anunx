import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from '@mui/material'


export default function AlertDialog({
    open,
    handleClose,
    handleConfirm,
    title,
    message,
    confirmMsg,
    cancelMsg,
}) {

  return (
    <>
        <Dialog
            open={open}
            onClose={handleClose}
        >
            <DialogTitle>
                {title}
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {message}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>
                    {cancelMsg}
                </Button>
                <Button onClick={handleConfirm} autoFocus>
                    {confirmMsg}
                </Button>
            </DialogActions>
        </Dialog>
    </>
  )
}
