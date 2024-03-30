import { PropsWithChildren } from 'react'

export const ExampleTable = ({ children }: PropsWithChildren<{}>) => {
	return (
		<table>
			<tbody>{children}</tbody>
		</table>
	)
}

export const ExampleRow = ({ children }: PropsWithChildren<{}>) => {
	return <tr>{children}</tr>
}

export const ExampleCol = ({ children }: PropsWithChildren<{}>) => {
	return <td>{children}</td>
}
