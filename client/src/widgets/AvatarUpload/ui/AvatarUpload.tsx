import { classNames } from 'shared/lib/classNames/classNames';
import { ChangeEvent, memo, useCallback, useEffect, useState } from 'react';
import { VStack } from 'shared/UI/Stack';
import { Text } from 'shared/UI/Text';
import UserPlaceholderIcon from 'shared/assests/icons/user-placeholder.svg';
import { Icon } from 'shared/UI/Icon/Icon';
import { FileIcon } from '@radix-ui/react-icons';
import classes from './AvatarUpload.module.scss';

interface AvatarUploadProps {
    className?: string;
    required?: boolean;
    setFile: (file: File) => void;
    file?: File;
    placeholder?: string;
    type?: 'img' | 'file';
    name?: string;
}

export const AvatarUpload = memo((props: AvatarUploadProps) => {
    const { className, required, name, setFile, file, placeholder = 'Ваше фото', type } = props;

    const [imageUrl, setImageUrl] = useState<string>('');

    const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageUrl(reader.result as string);
                setFile(file);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <VStack className={classNames(classes.AvatarUpload, {}, [className])}>
            <label htmlFor={type} className={classes.label}>
                {!imageUrl && (
                    <>
                        {type === 'img' && <Icon Svg={UserPlaceholderIcon} />}
                        <Text align="center" text={placeholder} className={classes.text} />
                    </>
                )}

                {imageUrl && file?.type.includes('image') && (
                    <img className={classes.img} src={imageUrl} alt={file?.name || 'Файл'} />
                )}

                {imageUrl && !file?.type.includes('image') && (
                    <VStack maxW>
                        <FileIcon className={classes.img} />
                        <Text text={file?.name || 'Файл'} className={classes.text} align="center" />
                    </VStack>
                )}
            </label>

            <input
                name={name}
                required={required}
                id={type}
                className={classes.input}
                type="file"
                accept={type === 'img' ? 'image/*' : 'application/pdf'}
                onChange={handleImageUpload}
            />
        </VStack>
    );
});
