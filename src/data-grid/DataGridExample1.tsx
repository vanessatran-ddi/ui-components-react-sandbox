import {GoabBadge, GoabButton, GoabDataGrid, GoabTable} from "@abgov/react-components";

export const DataGridExample1 = () => {
    const users = [
        { id: "1", name: "Alice Johnson", role: "Developer", status: "Active" },
        { id: "2", name: "Bob Smith", role: "Designer", status: "Active" },
        { id: "3", name: "Carol White", role: "Manager", status: "Away" },
        { id: "4", name: "David Brown", role: "Analyst", status: "Active" },
    ];

    return (
<GoabDataGrid keyboardNav="table">
    <GoabTable width="100%">
        <thead>
        <tr data-grid="row">
            <th data-grid="cell">Name</th>
            <th data-grid="cell">Role</th>
            <th data-grid="cell">Status</th>
            <th data-grid="cell">Actions</th>
        </tr>
        </thead>
        <tbody>
        {users.map((user) => (
            <tr key={user.id} data-grid="row">
                <td data-grid="cell">{user.name}</td>
                <td data-grid="cell">{user.role}</td>
                <td data-grid="cell">
                    <GoabBadge
                        type={user.status === "Active" ? "success" : "information"}
                        content={user.status}
                    />
                </td>
                <td data-grid="cell">
                    <GoabButton type="tertiary" size="compact">View</GoabButton>
                </td>
            </tr>
        ))}
        </tbody>
    </GoabTable>
</GoabDataGrid>
    )
}
