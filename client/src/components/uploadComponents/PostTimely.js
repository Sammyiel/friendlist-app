import React from "react";
import Select from 'react-select'
import makeAnimated from 'react-select/animated';

const communitiesAvailable = [
    { value: 'ALU', label: 'ALU' },
    { value: 'Youth Kigali', label: 'Youth Kigali' },
    { value: 'Women in IT', label: 'Women in IT' },
    { value: 'CMU', label: 'CMU' },
    { value: 'UR', label: 'UR' },
    { value: 'Entertainment', label: 'Entertainment' },
    { value: 'Sports central', label: 'Sports central' },
    { value: 'Work and Internship', label: 'Work and Internship' },
    { value: 'Conservation', label: 'Conservation' },
  ];

const animatedComponents = makeAnimated();

const options = [
    { value: 'mins', label: 'mins' },
    { value: 'hours', label: 'hours' },
    { value: 'days', label: 'days' },
    { value: 'weeks', label: 'weeks' },
    { value: 'months', label: 'months' }
]

class PostTimely extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            invitees_volume: 2,
            duration_quantity: 6,
            communitiesAvailable: null,
            media_post: null,
            caption_description: null,
            tags: null,
            interests: null,
            feelings: null
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    }

    handleSubmit(event) {
        alert(JSON.stringify(this.state));
        event.preventDefault();
    }
      
  
    render() {
      return (
        <div className='body-section'>
            <form className="post-form" onSubmit={this.handleSubmit}>

                <h2 className="form-title">Post a timely invite</h2>

                <div className="form-input-group">
                    <label>
                    <div className="label-title">Add image/video</div>
                    <input
                        name="media_post"
                        type="file"
                        value={this.state.media_post}
                        onChange={this.handleInputChange} />
                    </label>
                </div>

                <div className="form-input-group">
                    <label>
                    <div className="label-title">Add description</div>
                    <textarea
                        className="caption-description"
                        name="caption_description"
                        type="text"
                        rows={4}
                        value={this.state.caption_description}
                        onChange={this.handleInputChange} >
                    </textarea>
                    </label>
                </div>

                <div className="form-input-group">
                    <label>
                        <div className="label-title">Choose communities to post to</div>
                            <Select
                                closeMenuOnSelect={false}
                                components={animatedComponents}
                                isMulti
                                options={communitiesAvailable}
                            />
                    </label>
                </div>

                <div className="form-input-group">
                    <label>
                        <div className="label-title">Number of invitees at a maximum</div>
                        <input
                        name="invitees_volume"
                        type="number"
                        value={this.state.invitees_volume}
                        onChange={this.handleInputChange} />
                    </label>
                </div>

                <div className="form-input-group">
                    <label>
                        <div className="label-title">Visibility duration</div>
                        <input
                        name="duration_quantity"
                        type="number"
                        value={this.state.duration_quantity}
                        onChange={this.handleInputChange} />
                    </label>
                </div>

                <div className="form-input-group">
                    <label>
                        <Select options={options} 
                            defaultValue={[options[1]]}
                        />
                    </label>
                </div>

                <br />
                <h3>Train the system to find the best matches for you <i>(Optional)</i></h3>
                <div className="form-input-group">
                    <label>
                    <div className="label-title">Add interests</div>
                        <textarea
                            className="interests-textarea"
                            name="interests"
                            type="text"
                            rows={4}
                            value={this.state.interests}
                            onChange={this.handleInputChange} >
                        </textarea>
                    </label>
                </div>

                <div className="form-input-group">
                    <label>
                    <div className="label-title">Add Feelings/status</div>
                        <textarea
                            className="feelings-textarea"
                            name="feelings"
                            type="text"
                            rows={4}
                            value={this.state.feelings}
                            onChange={this.handleInputChange} >
                        </textarea>
                    </label>
                </div>

                <div className="form-input-group">
                    <label>
                    <div className="label-title">Add tags/keywords</div>
                        <textarea
                            className="tags-textarea"
                            name="tags"
                            type="text"
                            rows={4}
                            value={this.state.tags}
                            onChange={this.handleInputChange} >
                        </textarea>
                    </label>
                </div>

                <div className="form-input-group">
                    <input className="form-submit-button" type="submit" value="Submit" />
                </div>
            </form>
        </div>
      );
    }
  }

export default PostTimely;
