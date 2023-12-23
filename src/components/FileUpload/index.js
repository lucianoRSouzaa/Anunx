import {
    Typography,
    Box,
    IconButton,
} from '@mui/material'
  
import { DeleteForever } from '@mui/icons-material'
import { useDropzone } from 'react-dropzone'
  
import style from './FileUpload.module.css'  

const FileUpload = ({ files, errors, touched, setFieldValue }) => {

    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: (acceptedFile) => {      
            // está criando um novo objeto para cada file só que acrescentando nesse objeto
            // a propriedade preview com o valor de URL.createObjectURL() => (nativo do JS)
            const newFiles = acceptedFile.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            }))

            setFieldValue('files', [
                ...files,
                ...newFiles,
            ])
        }
    })

    const handleRemoveFile = filePath => {
        const newFileState = files.filter(file => file.path !== filePath)
        setFieldValue('files', newFileState)
    }

    return (
        <>
            <Typography component="h6" variant="h6" color={errors && touched ? 'error' : 'textPrimary'}>
                Imagens
            </Typography>
            <Typography component="div" variant="body2" color={errors && touched ? 'error' : 'textPrimary'}>
                A primeira imagem é a foto principal do seu anúncio.
            </Typography>
            <Box className={style.BoxThumbsContainer}>
                <Box className={style.BoxDropzone} {...getRootProps()}>
                    <input {...getInputProps()} />              
                    <Typography variant="body2" color={errors && touched ? 'error' : 'textPrimary'}>
                        Clique para adicionar ou arraste a imagem para aqui.
                    </Typography>
                </Box>
                
                {
                files.map((file, index) => (
                    <Box
                        key={file.name}
                        className={style.boxThumb}
                        style={{ backgroundImage: `url(${file.preview})` }}
                    >
                        {
                            index === 0 ?
                            <Box className={style.boxMainImage}>
                                <Typography variant="body" color="secondary">
                                    Principal
                                </Typography>
                            </Box> 
                            : null
                        }                  
                        <Box className={style.boxThumbMask}>
                            <IconButton color="secondary" onClick={() => handleRemoveFile(file.path)}>
                            <DeleteForever fontSize="large" />
                            </IconButton>
                        </Box>
                    </Box>
                ))
                }            
            </Box>
            {
                errors && touched
                ? <Typography variant="body2" color="error">{errors}</Typography>
                : null
            }
        </>
    )
}

export default FileUpload