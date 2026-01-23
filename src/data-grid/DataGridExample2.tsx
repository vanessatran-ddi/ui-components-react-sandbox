import {useState} from "react";
import {GoabTableOnSortDetail} from "@abgov/ui-components-common";
import {
    GoabBadge,
    GoabCheckbox,
    GoabDataGrid,
    GoabMenuAction,
    GoabMenuButton, GoabTable,
    GoabTableSortHeader
} from "@abgov/react-components";

export const DataGridExample2 = () => {
    const [applications, setApplications] = useState([
        { id: "APP-001", applicant: "John Doe", dateSubmitted: "2024-01-15", status: "Approved", amount: "$5,000" },
        { id: "APP-002", applicant: "Jane Smith", dateSubmitted: "2024-01-18", status: "Pending", amount: "$3,500" },
        { id: "APP-003", applicant: "Bob Wilson", dateSubmitted: "2024-01-20", status: "In Review", amount: "$7,200" },
    ]);

    const [selectedIds, setSelectedIds] = useState<string[]>([]);
    const [isSelectedAll, setIsSelectedAll] = useState(false);

    const isSelected = (id: string): boolean => selectedIds.includes(id);

    const toggleSelection = (id: string) => {
        if (selectedIds.includes(id)) {
            setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
        } else {
            setSelectedIds([...selectedIds, id]);
        }
    };

    const selectAll = (checked: boolean) => {
        setIsSelectedAll(checked);
        setSelectedIds(checked ? applications.map((app) => app.id) : []);
    };

    const handleSort = (event: GoabTableOnSortDetail) => {
        const { sortBy, sortDir } = event;
        const sorted = [...applications].sort((a: any, b: any) =>
            (a[sortBy] > b[sortBy] ? 1 : -1) * sortDir
        );
        setApplications(sorted);
    };

    const getStatusBadgeType = (status: string) => {
        const types: Record<string, "success" | "important" | "information" | "emergency"> = {
            "Approved": "success",
            "Pending": "important",
            "In Review": "information",
            "Denied": "emergency"
        };
        return types[status] || "information";
    };

    return (
        <>
            <GoabDataGrid keyboardNav="table">
                <GoabTable width="100%" onSort={handleSort}>
                    <thead>
                    <tr data-grid="row">
                        <th data-grid="cell" style={{ paddingBottom: 0 }}>
                            <GoabCheckbox
                                name="selectAll"
                                checked={isSelectedAll}
                                onChange={(e) => selectAll(e.checked)}
                            />
                        </th>
                        <th data-grid="cell">
                            <GoabTableSortHeader name="id">ID</GoabTableSortHeader>
                        </th>
                        <th data-grid="cell">
                            <GoabTableSortHeader name="applicant">Applicant</GoabTableSortHeader>
                        </th>
                        <th data-grid="cell">
                            <GoabTableSortHeader name="dateSubmitted">Date Submitted</GoabTableSortHeader>
                        </th>
                        <th data-grid="cell">Status</th>
                        <th data-grid="cell">Amount</th>
                        <th data-grid="cell">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {applications.map((app) => (
                        <tr key={app.id} data-grid="row">
                            <td data-grid="cell">
                                <GoabCheckbox
                                    name={`app-${app.id}`}
                                    checked={isSelected(app.id)}
                                    onChange={() => toggleSelection(app.id)}
                                />
                            </td>
                            <td data-grid="cell">{app.id}</td>
                            <td data-grid="cell">{app.applicant}</td>
                            <td data-grid="cell">{app.dateSubmitted}</td>
                            <td data-grid="cell">
                                <GoabBadge type={getStatusBadgeType(app.status)} content={app.status} />
                            </td>
                            <td data-grid="cell">{app.amount}</td>
                            <td data-grid="cell">
                                <GoabMenuButton text="Actions" type="tertiary">
                                    <GoabMenuAction action="view" text="View details" />
                                    <GoabMenuAction action="edit" text="Edit" />
                                </GoabMenuButton>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </GoabTable>
            </GoabDataGrid>
        </>
    )
}
