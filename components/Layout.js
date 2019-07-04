import React, { Component } from 'react';
import Link from 'next/link'

class App extends Component {

    state = {
        maxNo: 3,
        boards: [
            {
                brdno: 1,
                brdwriter: 'Joanne',
                brdtitle: 'Sample Text',
                brddate: new Date()
            },
            {
                brdno: 2,
                brdwriter: 'Jane',
                brdtitle: 'Sample Text',
                brddate: new Date()
            }
        ]
    }

    handleSaveData = (data) => {
        this.setState({
            boards: this.state.boards.concat({ brdno: this.state.maxNo++, brddate: new Date(), ...data })
        });
    }

    render() {
        const { boards } = this.state;

        return (
            <div>
                <h1>React-Board</h1>
                <table border="1">
                    <tbody>
                    <tr align="center">
                        <td width="50">No.</td>
                        <td width="300">Title</td>
                        <td width="100">Name</td>
                        <td width="100">Date</td>
                    </tr>
                    {
                        boards.map(function(row){
                            return (<BoardItem key={row.brdno} row={row} />);
                        })
                    }
                    </tbody>
                </table>
				<Link href="/write">
	                <button>Write</button>
		        </Link>

            </div>
        );
    }
}

class BoardItem extends React.Component {
    render() {
        return(
            <tr>
                <td>{this.props.row.brdno}</td>
                <td>{this.props.row.brdtitle}</td>
                <td>{this.props.row.brdwriter}</td>
                <td>{this.props.row.brddate.toLocaleDateString('ko-KR')}</td>
            </tr>
        );
    }
}

export default App;
