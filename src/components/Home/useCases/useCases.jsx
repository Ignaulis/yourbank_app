import UseCasesTable2, {info1, info2} from "./useCasesTable2";
import UseCasesTable, { table1, table2 } from "./useCaseTable";

export default function UseCases() {

    return (
        <div className="usecases-wrap">
            <div className="usecases-head">
                <span>Use Cases</span>
                <p>At YourBank, we cater to the diverse needs of individuals and businesses alike, offering a wide range of financial solutions</p>
            </div>
            <div className="usecases-table1">
                <UseCasesTable data={table1} />
                <UseCasesTable2 data={info1}/>
            </div>
            <div className="usecases-table2">
                <UseCasesTable2 data={info2} />
                <UseCasesTable data={table2} />

            </div>
        </div>
    );
}