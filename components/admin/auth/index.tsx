"use client"

import { useField } from '@mantine/form';
import { PasswordInput, TextInput } from '@mantine/core';
import styles from "./styles.module.css";
import { useAuthentication } from '@/hooks/use-authentication';
import { useRouter } from 'next/navigation';


export default function Auth() {
	const router = useRouter()
	const { setIsAuthenticated } = useAuthentication()

	const field1 = useField({
		initialValue: '',
		validate: (value) => (value !== 'admin' ? 'Wrong username' : null),
	});

	const field2 = useField({
		initialValue: '',
		validate: (value) => (value !== 'admin' ? 'Wrong password' : null),
	});

	const handleClicked = () => {
		field1.validate();
		field2.validate();
		if (field1.getValue() === 'admin' && field2.getValue() === 'admin') {
			setIsAuthenticated(true);
			router.push('/admin/dashboard')
		}
	}

	return (
		<div className={styles.loginContainer}>
			<div className={styles.loginTitle}>Admin</div>
			<TextInput {...field1.getInputProps()} label="Username" mb="md" w={400} size="lg"
			/>

			<PasswordInput {...field2.getInputProps()} label="Password" mb="md" w={400} size="lg"
			/>

			<div
				className={styles.login_btn}
				onClick={handleClicked}
			>
				Login
			</div>
		</div>
	);
}
